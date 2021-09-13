// POSTS
export const get_posts_state = state => state.Posts_reducer.posts;
export const get_user_posts_state = state => state.User_posts_reducer.user_posts
// USER
export const get_user_state = state => state.User_reducer;

// CONVERSATION
export const get_conversation_state = state => state.Conversation_reducer;