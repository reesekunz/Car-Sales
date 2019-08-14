// User functionality Actions to add: 
// - User should be able to add features to their car
// - User should be able to remove added features from their car
// - Total should update as user adds and removes features from their car

// add feature - referenced in AdditionalFeature.js 
// action type 
export const ADD_FEATURE = "ADD_FEATURE";

// action creator 
export const addFeature = feature => {
console.log("addFeature = ", feature)

return { 
// action itself 
// pass in variable name created above (type is required) 
type: "ADD_FEATURE", 
// (most actions have payload but not required)
payload: feature

}
}

// delete feature - referenced in AddedFeature.js 

// action type 
export const DELETE_FEATURE = "DELETE_FEATURE";

// action creator 
export const deleteFeature = featureName => {
console.log("deleteFeature = ", featureName)

return { 
// action itself 
// pass in variable name created above (type is required) 
type: DELETE_FEATURE, 
// (most actions have payload but not required)
payload: featureName 
} }

