import { ApiService } from "./ApiService";

const  endPoint = 'recipe';

export const RecipeService = {
    get(id){
        return ApiService.get(`${endPoint}?id=${id}`);
    },
    listAll(){
        return ApiService.get(endPoint)
    }
}