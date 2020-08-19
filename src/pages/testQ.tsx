import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { IonItem } from '@ionic/react';

interface RocketInventory {
    id: number;
    model: string;
    year: number;
    stock: number;
}

interface RocketInventoryData {
    rocketInventory: RocketInventory[];
}


const GET_ROCKET_INVENTORY = gql`
    query getRocketInventory($year: Int!) {
        rocketInventory(year: $year) {
            id
            model
            year
            stock
        }
    }
`;

export function RocketInventoryList() {
    const { loading, data } = useQuery<RocketInventoryData>(
        GET_ROCKET_INVENTORY
    );
    return (
        <div>
            {loading ? (
                <p>Loading ...</p>
            ) : (


                    <div>
                    {data && data.rocketInventory.map(inventory => (

                            <IonItem>{inventory.model}</IonItem>


                    ))}
                    </div>

            )}
        </div>
    );
}