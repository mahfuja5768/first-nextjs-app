

const DynamicPage = ({params,searchParams}) => {
    console.log('p--------------->',searchParams)
    return (
        <div>
            <h2>This is Dynamic Page: {params.id}</h2>
            <h2>This is Dynamic Page: {searchParams.category}</h2>
        </div>
    );
};

export default DynamicPage;