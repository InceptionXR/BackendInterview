// 1. Please list 5 things that can be improved/fixed in the following code

//2. Please fix the bugs in the function, assuming all named functions exist.

//3. Please rewrite it, avoiding the callback hell anti-pattern.

const login = ({ email, password }, session) => {
   userCollection.find({ email }, (user) => {
      if (!user) {
         throw new Error("Failed to log in.");
      }
      passwordService.validatePassword(password, user.password, () => {
         updateSession(user.id, session, (updatedUser) => {
            analyticsService.sendEvent('LOGIN', updatedUser);
            generateAccessToken(user, (access_token) => 
                res.status(200).send({ access_token })
            )
         })
      })
   })
}