export const appName = "Postagram";
/**
 * List of categories 
*/
export const categories = [
    { id: "edu", text: "Education" },
    { id: "ent", text: "Entertainment" },
    { id: "tch", text: "Technology" },
    { id: "tvl", text: "Travelling" },
    { id: "etc", text: "Others" },
];

export const getCategory = (id) => {
    const item = categories.find(
        (category) => category.id === id
    )
    return item?.text || 'none';
}
/**
 * List of statuses
*/
export const moreStatus = [
    { id: "d", text: "Draft" },
    { id: "p", text: "Published" },
    { id: "a", text: "Archived" },
];

export const getStatus = (id) => {
    const item = moreStatus.find(
        (status) => status.id === id
    );
    return item?.text || 'not set';
}

