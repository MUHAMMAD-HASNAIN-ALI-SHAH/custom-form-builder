import React from 'react'

interface PageProps {
    params: { formId: string[] }
}

const Page = ({ params }: PageProps) => {
    const pageId = params.formId?.[0];

    return (
        <div>
            Page ID: {pageId}
        </div>
    );
}

export default Page
