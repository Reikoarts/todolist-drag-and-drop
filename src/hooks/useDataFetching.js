import { useState, useEffect } from "react";

function useDataFetching(dataSource){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData(){
            try {
                const data = await fetch(dataSource);
                const result = await data.json();
                console.log('result', result)
                if(result){
                    setData(result);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setError(error.message);
            }
        }

        fetchData();
    }, [dataSource])


    return [loading, error, data];
}

export default useDataFetching;