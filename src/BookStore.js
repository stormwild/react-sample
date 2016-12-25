import React from 'react';

var BookList = React.createClass({
    getInitialState() {
        return ({ books: [
            { name: 'Zero to One', author: 'Peter Thiel' },
            { name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
            { name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
            ] });
    },
    
    _renderBook(book) {
        return (
            <div className="checkbox" key={ book.id }>
                <label>
                    <input type="checkbox" value={ book.name } 
                        onChange={ this.handleSelectedBooks } /> 
                        { book.name } - { book.author }
                </label>
            </div>
            );
    },
    
    handleSelectedBooks(event) {
        var selectedBooks = this.state.selectedBooks, 
            index = selectedBooks.indexOf(event.target.value);
        
        if(event.target.checked) {
            if(index === -1) {
                selectedBooks.push(event.target.value);
            } else {
                selectedBooks.splice(index, 1);
            }
        }
        
        this.setState({ selectedBooks: selectedBooks });
    },
    
    render() {
        return (
            <div>
                <h1>Choose from a wide variety of books available in our store.</h1>
                <form onSubmit={ this.handleSubmit }>
                    { this.state.books.map((book) => { return this._renderBook(book); }) }
                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
            );
    },
    
    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        console.log('Form submitted');
    }
});

var ShippingDetails = React.createClass({
    render() {
        return (<h1>Enter your shipping information.</h1>);
    }
});

var DeliveryDetails = React.createClass({
    render() {
        return (<h1>Choose delivery options here.</h1>);
    }
});

var BookStore = React.createClass({
    getInitialState() {
        return ({ currentStep: 1 });
    },
    
    updateFormData(formData) {
        console.log(formData);
    },
    
    render() {
        switch(step) {
            case 1:
                return <BookList updateFormData={ this.updateFormData } />;
            case 2:
                return <ShippingDetails updateFormData={ this.updateFormData } />;
            case 3:
                return <DeliveryDetails updateFormData={ this.updateFormData } />;
        }
    }
});