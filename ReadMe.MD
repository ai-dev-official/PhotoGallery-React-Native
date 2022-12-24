1. Create a new project
First, create a new React Native project: expo init PhotoGallery --template blank

When this is finished, open up App.js. If it's different from the code on the right, paste the code on the right in. Then, click the "Next" button below to continue.


2. Copy picsum API file

Create the directory api and the file picsum.js within it. Copy the code on the right into picsum.js.

There are 2 exported functions: 

• getList - Fetch a paginated list of photos
• formatPhotoUri - Create a uri from an image id and size

3. Create photos reducer file

Create the directory reducers and the file photos.js within it.

4. Create types and actionCreators

Our reducer will support 3 actions, LOADING, SUCCESS, and ERROR, which correspond to UI states.

5. Add initialState object

We'll concatenate the infinite list of photos into a photos array, keeping track of the next page to fetch with nextPage.

6. Add reducer function

Write a reducer function to handle each of our actions.

When handling a SUCCESS action, we concatenate the existing photos array with the new page of photos and increment the nextPage counter.

7. Create a PhotoGrid component

Create the directory components and the file PhotoGrid.js within it.

This component will have 3 props: photos, containing our list of photos, numColumns specifying how many columns our FlatList should render, and an onEndReached callback to let us know when to load more photos.

We'll start by using the Dimensions API to determine the width of the screen, and divide the result by numColumns to know what size of image to display.

8. Return a FlatList

Next, we'll return a FlatList.

In our renderItem, we return an Image component. We specify the intrinsic/natural size of the image in the source prop, so that it's displayed with the correct dimensions.

We also make sure to propagate the onEndReached function into the FlatList.

9. Putting it all together

Now we can return to App.js and put the pieces together.

Start by updating the imports to include our other files.

10. Rendering

Next, we'll call useReducer with our initial state and reducer function.

Then, based on the state, we can render a loading or error screen, or our PhotoGrid if the data was fetched successfully.

11. Connecting our data

Lastly, we'll write a fetchPhotos function that fetches the next page of photos. We call this in 2 places:

• once within useEffect after the initial render
• any time onEndReached is called

We use useCallback because our fetchPhotos function is async, and we need to make sure we're working with up-to-date values.