var comments = [];

export default class Comment {
    constructor(parentId, key) {
        this.type = type;
        this.key = key;
        this.getAllComments(comments);
    }

    addComment() {
        const NewComment = {
            name: hikeName,
            date: new Date(),
            content: comment
          };
          console.log(NewComment);
    }

    getAllComments() {}
    renderCommentList() {}
    filterCommentsByName() {}

    getFromLS(key) {
        var a = localStorage.getItem(key);
        var parsed;
        try {
            parsed = JSON.parse(a);
        } catch (ex) {
            console.error(ex);
        }
        return parsed;
    }
    
    
    saveToLS(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

export default Comment;