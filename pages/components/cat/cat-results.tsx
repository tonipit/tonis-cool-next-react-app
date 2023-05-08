import CatOfSamuli from './cat-of-samuli';

const CatList = ({ cats, city }) => {
    return (
        <div className="cats">
            {!cats && <div>Loading</div>}
            {(cats?.length &&
                cats.map((cat: any) => (!city || cat.city === city) && <CatOfSamuli cat={cat}></CatOfSamuli>)) ||
                null}
        </div>
    );
};

export default CatList;
