// Tạo 1 class product
class Product
{
    //Constructor no parameters
    constructor()
    {
    }

    //Các hàm setter và getter
    get id()
    {
        return this._id;
    }

    set id(value)
    {
        this._id = value;
    }

    get name()
    {
        return this._name;
    }
    
    set name(value)
    {
        this._name = value;
    }

    get categoryId()
    {
        return this._categoryId;
    }

    set categoryId(categoryId)
    {
        this._categoryId = categoryId;
    }

    get saleDate()
    {
        return this._saleDate;
    }

    set saleDate(saleDate)
    {
        this._saleDate = saleDate;
    }

    get quantity()
    {
        return this._quantity;
    }

    set quantity(quantity)
    {
        this._quantity = quantity;
    }

    get isDelete()
    {
        return this._isDelete;
    }

    set isDelete(isDelete)
    {
        this._isDelete = isDelete;
    }
}

