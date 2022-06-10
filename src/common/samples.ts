(() => {
    console.log('Immediately invoked function expression');

    /**
     * First interview questions
     * 1) Open jsfiddle and start coding JS.
     * 2) Write sample code of call, apply, bind.
     * 3) Given array ['a', ['b'], [[[['c']]]], ['d', ['e'], [[['f', 'g', 'h']]]]], flatten this array with simple code, do not use array
     * flat.
     */

    let car1 = {
        regNumber: 'KA GR 1234',
        brand: 'Mahindra SUV 700',
        displayDetails: function () {
            //@ts-ignore
            console.log(this.regNumber + ' ' + this.brand);
        },
    };

    // works
    car1.displayDetails();

    // Does not work because the context is changed, this is now global.
    let displayFunc1 = car1.displayDetails;
    // displayFunc1();
    // Above error "Cannot read property 'regNumber' of undefined"

    // So use bind to keep the context.
    let displayFunc2 = car1.displayDetails.bind(car1);
    displayFunc2();

    let car2 = {
        regNumber: 'AP GR 1234',
        brand: 'Mahindra Scorpio N',
    };

    function displayDetails2(this: any, ownerName: any) {
        console.log(ownerName, this.regNumber, this.brand);
    }

    // attach context to the function and call
    // apply - takes array as parameter
    displayDetails2.apply(car2, ['Vivian']);
    // call - accepts both
    displayDetails2.call(car2, 'Vivian'); // Vivian AP GR 1234 Mahindra Scorpio N

    let items = ['a', ['b'], [[[['c']]]], ['d', ['e'], [[['f', 'g', 'h']]]]];
    let newItems: any[] = [];
    function flattenItems(items: any[]) {
        items.forEach(item => {
            if (typeof item === 'object') {
                flattenItems(item);
            } else {
                newItems.push(item);
            }
        });
    }
    flattenItems(items);
    console.log('Items:', items);
    console.log('Flatten items:', newItems);
})();
