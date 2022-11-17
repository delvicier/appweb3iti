const getDogs = async() => {
    const url = "https://api.thedogapi.com/v1/breeds";
    const res = await fetch(url);
    const [data] = await res.json();

    const { name:names } = data;

    const dog = {
        names
    }

    return dog;
}

export default getDogs;