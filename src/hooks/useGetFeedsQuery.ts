import React, { useEffect, useState } from 'react';
import { getAxios } from 'services/ApiService';

export const useGetFeedsQuery = (url: string) => {
    const [data, setData] = useState({});
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAxios(url);
                if (res) {
                    setData(res);
                }
            } catch (err) {
                setError(`${error} Could not Fetch Data `);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [])


    return {
        data,
        isloading,
        error
    }
}