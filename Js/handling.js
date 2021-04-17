// Khởi tạo 1 array listProduct
var listProduct = [];

/**
 * Create 10 objects products added to the array listProduct
 * @return void
 */
function createData(listProduct){
    let id = 0;
    let name = "Product version : "+0;
    let categoryId = 8;
    let dateSale = "4/18/2023, 2:28:21 AM";
    let quantity =  Math.floor(Math.random() *1000);
    let isDelete =  true;
    product = new Product();
    product.id = id;
    product.name = name;
    product.categoryId = categoryId;
    product.dateSale = dateSale;
    product.quantity = quantity;
    product.isDelete = isDelete;
    listProduct.push(product);
    for (let index = 1; index <= 10; index++) {
        let id = index;
        let name = "Product version : "+index;
        let categoryId = Math.floor(Math.random() *6);
        let dateSale = new Date().toLocaleString('vn').split(', ').toString("dd/mm/yyyy");
        let quantity =  Math.floor(Math.random() *1000);
        let isDelete =  false;
        product = new Product();
        product.id = id;
        product.name = name;
        product.categoryId = categoryId;
        product.dateSale = dateSale;
        product.quantity = quantity;
        product.isDelete = isDelete;
        listProduct.push(product);
    }
}

/**
* Check Object
* @return {boolean}
*/
function isObject(object){
    if(object !== null && typeof object === 'object'){
        return true;
    }
    return false;  
}

/**
* Check array
* @return {boolean}
*/
function isArray(object){
    if(object !== null && typeof object === 'object' && object.length >= 0){
        return true
    }
    return false;  
}

/**
 * Get name product by Id : ES6
 * @return {string|null} name
 */
function fiterProductById(listProduct,id){
    let object;
    if(!isArray(listProduct)){
        return false;
    }
    object = listProduct.find(function(value){
        if(isObject(value)){
            return value.id==id;
        }
    });
    return object.name; 
}

/**
* Get name product by Id : for
* @return {string|null} name
*/
function fiterProductByIdUseFor(listProduct,id){
    if(!isArray(listProduct)){
        return false;
    }
    for (let index = 0; index < listProduct.length; index++) {
        const object = listProduct[index];
        if(isObject(object) && object.id == id){
            return object.name;
        }   
    } 
   return null;
}

/**
* Get list product by quantity>500 and isDelet = false: ES6
* @return {array|null}
*/
function fiterProductByQuantity(listProduct){
    let result;
    if(!isArray(listProduct)){
        return false;
    }
    result = listProduct.filter(function(value){
        if(isObject(value)){
            return !value.isDelete && value.quantity>0;
        }
    });
    if(isArray(result) && result.length>0){
        return result;
    }
    return null;
}

/**
* Get list product by quantity>500 and isDelet = false : For
* @return {array|null} name
*/
function fiterProductByQuantityUseFor(listProduct){
    let result = [];
    if(!isArray(listProduct)){
        return null;
    }
    for (let index = 0; index < listProduct.length; index++) {
        const object = listProduct[index];
        if(isObject(object) && object.isDelete !== null && object.quantity>0){
            result.push(object);
        }
    }
    if(isArray(result) && result.length>0){
        return result;
    }
    return null;
}

/**
* Get list name product by saleDate> Date Now and isDelet = false: ES6
* @return {array|null}
*/
function fiterProductBySaleDate(listProduct){
    let result;
    let timeNow = new Date().toLocaleString('en').toString("dd/mm/yyyy");
    if(!isArray(listProduct)){
        return false;
    }
    result = listProduct.filter(function(object){
        if(isObject(object)){
            return object.isDelete !== null && object.dateSale>timeNow;
        }
    });
    if(isArray(result) && result.length>0){
        return result.map(function(value){
            return value.name;
        });
    }
    return null;
}

/**
* Get list name product by saleDate> Date Now and isDelet = false: For
* @return {array|null} name
*/
function fiterProductBySaleDateUseFor(listProduct){
    let result = [];
    let timeNow = new Date().toLocaleString('en').toString("dd/mm/yyyy");
    if(!isArray(listProduct)){
        return null;
    }
    for (let index = 0; index < listProduct.length; index++) {
        let object = listProduct[index];
        if(isObject(object) && object.isDelete !== null && object.dateSale>timeNow){
            result.push(object.name);
        }
    }
    if(isArray(result) && result.length>0){
        return result;
    }
    return null;
}

/**
* Sum quantity => condition isDelet = false: reduce
* @return {int}
*/
function totalProduct(listProduct){
    let result = 0;
    if(!isArray(listProduct)){
        return 0;
    }
    result = listProduct.reduce(function(total,value){
        if(isObject(total)){
            total = (total.isDelete)?0:total.quantity;
        }
        if(value.isDelete){
            return total;
        }
        return total+value.quantity;
    });
    return result;
}

/**
* Sum quantity => condition isDelet = false: no reduce
* @return {int} result
*/
function totalProductNoReduce(listProduct){
    let result = 0;
    if(!isArray(listProduct)){
        return 0;
    }
    listProduct.forEach(object => {
        if(isObject(object) && !object.isDelete){
            result+=object.quantity;
        }
    });
    return result;
}

/**
* Check if there are any products with the appropriate category : ES6
* @return {boolean} result
*/
function isHaveProductInCategory(listProduct,cateoryId){
    let result;
    if(!isArray(listProduct)){
        return false;
    }
    result = listProduct.some(function(object){
        return isObject(object) && object.categoryId == cateoryId; 
    });
    return result;
}

/**
* Check if there are any products with the appropriate category : For
* @return {boolean} result
*/
function isHaveProductInCategoryUseFor(listProduct,cateoryId){
    if(!isArray(listProduct)){
        return false;
    }
    for (let index = 0; index < listProduct.length; index++) {
        let object = listProduct[index];
        if(isObject(object) && object.categoryId == cateoryId){
            return true;
        }   
    }
    return false;
}

/**
* Get list name product by saleDate> Date Now and quantity > 0: For
* @return {array} result
*/
function fiterProductBySaleDateVr2(listProduct){
    let result;
    let timeNow = new Date().toLocaleString('en').toString("dd/mm/yyyy");
    if(!isArray(listProduct)){
        return false;
    }
    result = listProduct.filter(function(object){
        if(isObject(object)){
            return object.quantity>0 !== null && object.dateSale>timeNow;
        }
    });
    if(isArray(result) && result.length>0){
        return result.map(function(value){
            return [value.id,value.name];
        });
    }
    return null;
}

/**
* Get list name product by saleDate> Date Now and quantity > 0: For
* @return {array} result
*/
function fiterProductBySaleDateVr2UseFor(listProduct){
    let result = [];
    let timeNow = new Date().toLocaleString('en').toString("dd/mm/yyyy");
    if(!isArray(listProduct)){
        return null;
    }
    for (let index = 0; index < listProduct.length; index++) {
        let object = listProduct[index];
        if(isObject(object) && object.quantity>0 && object.dateSale>timeNow){
            result.push([object.id,object.name]);
        }
    }
    if(isArray(result) && result.length>0){
        return result;
    }
    return null;
}