let ok = function(values, res) {
    let data = {
        'values ': values,
        'status': res
    };
    res.json(data);
    res.end();
}