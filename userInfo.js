function createUserProfiles(names, modifiedNames) {
    let profiles = [];
    for (let i = 0; i < names.length; i++) {
        profiles.push({
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1
        });
    }
    return profiles;
}

// Exporting the function for use in other files if needed
module.exports = {
    createUserProfiles
};