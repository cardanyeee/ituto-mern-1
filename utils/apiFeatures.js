class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        if (this.queryStr.keyword) {
            const keywordArray = this.queryStr.keyword.split(' ').filter(keyword => keyword);
            var multipleValues;
            if (keywordArray[keywordArray.length - 1] && keywordArray.length > 1) {
                multipleValues = keywordArray.join('|');
            }
        }
        const keyword = this.queryStr.keyword ? [
            {
                firstname: {
                    $regex: multipleValues ? multipleValues : this.queryStr.keyword.trim(),
                    $options: 'i'
                }
            },
            {
                lastname: {
                    $regex: multipleValues ? multipleValues : this.queryStr.keyword.trim(),
                    $options: 'i'
                }
            },
            {
                email: {
                    $regex: multipleValues ? multipleValues : this.queryStr.keyword.trim(),
                    $options: 'i'
                }
            }
        ] : {}

        this.query = this.queryStr.keyword ? this.query.find({ $or: keyword }) : this.query.find({});
        return this;
    }

    filter() {

        const queryCopy = { ...this.queryStr };

        const removeFields = ['keyword', 'limit', 'page'];

        removeFields.forEach(el => delete queryCopy[el]);

        const subjects = queryCopy.subject ? queryCopy : {};

        console.log(subjects);

        this.query = this.query.find(subjects);
        
        return this;
    }

    pagination(resPerPage) {

        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resPerPage * (currentPage - 1);

        this.query = this.query.limit(resPerPage).skip(skip);

        return this;

    }
}

module.exports = APIFeatures;