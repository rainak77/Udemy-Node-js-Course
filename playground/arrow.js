const eventobj = {
    name: 'Arif',
    guestList: ['bob', 'tom', 'dick'],
    printGuest() {
        this.guestList.forEach(
            (item)=> {
                console.log(this.name);
            }
        );
    }
};


eventobj.printGuest();