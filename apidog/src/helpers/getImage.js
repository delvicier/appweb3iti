const getImage = async() => {
    const url = "https://api.thedogapi.com/v1/images/search";
    const res = await fetch(url);
    const [data] = await res.json();

    const { url: images, id: ids} = data;

    const imagen = {
        images,
        ids,
    }

    return imagen;
}

export default getImage;