const subcategoryToken = (category) => {
    if (category === 'Landscape Painting') {
        return '1';
    }
    else if(category === 'Portrait Drawing'){
        return '2';
    }
    else if (category === 'Watercolour Painting') {
        return '3';
    }
    else if (category === 'Oil Painting') {
        return '4';
    }
    else if (category === 'Charcoal Sketching') {
        return '5';
    }
    else if (category === 'Cartoon Drawing') {
        return '6';
    }
};

export default subcategoryToken;