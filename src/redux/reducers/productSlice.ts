import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    limit: 0,
    products: [],
    total: 0
}
export const getProductsList = createAsyncThunk('get_products_list',async () =>{
    try{
        const res = await fetch('https://dummyjson.com/products/category/smartphones')
        const productsRes = await res.json()
        return productsRes
    }catch (error){
        return[]
    }
})
const productSlice = createSlice({
    name: 'product_data',
    initialState: initialState,
    reducers: {
        setProducts: (state, action) => {
            console.log('==================================== action.payload');
            console.log(action.payload);
            console.log('====================================');
            state.limit = action.payload.limit
        }
    },
    extraReducers(builder){
        builder.addCase(getProductsList.pending,(state,action) =>{
            state.limit=0
            state.total=0
            state.products=[]
        })
        .addCase(getProductsList.fulfilled, (state,action)=>{
            console.log(action.payload)
            state.total=0
            state.products=action.payload.products
            state.limit=action.payload.limit
        })
        .addCase(getProductsList.rejected,(state,action)=>{
            state.limit=0
        })
    }
})
export const { setProducts } = productSlice.actions;
export default productSlice.reducer