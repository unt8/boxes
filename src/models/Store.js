import {action, decorate, observable} from "mobx";

class Store {
    root = {
        type: 'container',
        items: []
    };

    addBox(item) {
        item.items.push({
            type: 'box'
        });
    };

    addContainer(item) {
        item.items.push({
            type: 'container',
            items: []
        });
    };

    removeItem(items, item) {
        const index = items.indexOf(item);
        if (index > -1) {
            items.splice(index, 1);
        }
    }

    setRoot(data) {
        this.root = data;
    };

    setColor(color, item) {
        item.color = color;
    };

    _getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setRandomColor(item) {
        item.color = this._getRandomColor();
    };
}

decorate(Store, {
    type: observable,
    root: observable,
    addBox: action,
    addContainer: action,
    setColor: action,
    setRandomColor: action,
});

export default Store