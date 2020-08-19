import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from 'react-apollo';
import {IonItem} from "@ionic/react";

interface TemplateItem {
    templateId: string;
    createdOn: string
}

interface TemplateList {
    templates: TemplateItem[];
}
const GET_TEMPLATES = gql`
    {
        templates {
            templateId
            createdOn
        }
    }
`;



export function CdrTemplates(displayItem :any) {
        const { loading, data } = useQuery<TemplateList>(
            GET_TEMPLATES
        );

    return (
        <div>
            {loading ? (
                <p>Loading ...</p>
            ) : (


                <div>
                    {data && data.templates.map(template =>
                        { return displayItem(template) })

                    }
                </div>

            )}
        </div>
    );
}
