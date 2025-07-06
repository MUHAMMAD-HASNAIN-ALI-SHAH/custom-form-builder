import React from 'react'

const Paragraph = () => {
return (
    <textarea
        disabled
        placeholder="Paragraph"
        className="w-full border px-3 py-2 rounded-md bg-gray-100"
        style={{ height: '120px', resize: 'none' }}
    />
)
}

export default Paragraph
