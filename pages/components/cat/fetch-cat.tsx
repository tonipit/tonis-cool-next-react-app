const fetchCat = async ({ queryKey }) => {
    const id: any = queryKey[1];

    const link: string = `http://pets-v2.dev-apis.com/pets?id=${id}&animal=cat`;
    const apiRes = await fetch(link);

    if (!apiRes.ok) {
        throw new Error(`Error with fetching ${link}`);
    }

    return apiRes.json();
};

export default fetchCat;
