import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/get", async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=11"
    );
    const data = await response?.json();

    return data;
  } catch (error) {
    throw error;
  }
});

export const createPost = createAsyncThunk("posts/create", async (params) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: params?.title,
        body: params?.description,
        userId: 11,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const createdPost = await response?.json();

    return createdPost;
  } catch (error) {
    throw error;
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    updatePostById: (state, action) => {
      state.posts = state.posts.map((post) => {
        return post?.id === action?.payload?.postId
          ? {
              ...post,
              title: action.payload.title,
              body: action.payload.description,
            }
          : post;
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = state.posts.concat(action.payload);
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.posts = [...state.posts, { ...action.payload }];
    });
  },
});

export const { updatePostById } = postsSlice?.actions;
export default postsSlice.reducer;

export const selectPostById = (state, postId) =>
  state.postsReducer.posts.find((post) => post?.id === +postId);
