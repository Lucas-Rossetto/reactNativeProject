import * as React from 'react';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-community/async-storage';
import { fetchUpdateAsync, clearUpdateCacheExperimentalAsync } from 'expo/build/Updates/Updates';
import { ScrollView } from 'react-native-gesture-handler';

export const Exercice3 = async (url , networkPriority = false) => {

    const key = encodeURIComponent (url)
    const value = await AsyncStorage.getItem(key);

    try {

        if(value !== null && !networkPriority)
        {
            return { data: JSON.parse(value) , from: "Cache"};
        } 
        else 
        {
            const velibJson = await fetch (url);
            const velib = velibJson.json();
            await AsyncStorage.setItem(encodeURIComponent(key) , JSON.stringify(velib));
        }

        return { data: json , from: "API" };
    }
    catch(error) {
        return {
            error : error
        }
    }
}

export const Dataview = () => {

    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(false);
    const netInfo = useNetInfo();
    const fetchData = networkPriority => {
        setLoading(true);
        get(API_URL, networkPriority).then(data => {
            setData(data);
            setLoading(false);
        });
    };


// Request on mount
    useEffect(() => {
      // From cache if exist
      fetchData();
      // From API
      fetchData(true);
    }, []);

return (
    <ScrollView
        refreshControl={
            <refreshControl
                refreshing={loading}
                onRefresh={() => fetchData(true)}
            />
        }
    >

        {!data && <Text>Chargement...</Text>}
        {data && (
            <>
            {data.data && <Text>{data.data.nhits}Résultats</Text>}
            <Text>From {data.from}</Text>
            {data.error && <Text>Error: {JSON.stringify(data.error)}</Text>}
            </>
        )}
        <Text>
            Is Online ? {netInfo.isConnected.toString()}
        </Text>
     </ScrollView>
    );
};

export default Dataview;