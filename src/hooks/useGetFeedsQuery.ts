import React, { useEffect, useState } from 'react';
import { getAxios } from 'services/api/ApiService';

export const useGetFeedsQuery = (url: string, params?: any) => {
    const [data, setData] = useState<any[]>([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log("useGetFeedsQuery");
        const fetchData = async () => {
            try {
                const res: any[] = await getAxios(url, params);
                if (res) {
                    setData((prevData) => [...prevData, ...res]);
                }
            } catch (err) {
                setError(`${error} Could not Fetch Data `);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url, params])


    return {
        data,
        isloading,
        error
    }
}