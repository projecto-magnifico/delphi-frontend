GET /threads
Returns the threads with the highest score, with related articles and keywords
Queries: 
    ?count=1+       return this number of top stories, defaults to 10
    ?unnamed=true   returns only stories with an empty name property
    ?summary=null   returns only stories with no summary written
    ?summary=due    returns only stories with no summary or one over three days old

GET /threads/id
Returns score, articles and keywords for given thread_id

PATCH /threads/id
Update details - commonly name - of the thread id

POST /threads/id/articles
Add an article to a thread

GET /keywords
Returns the keywords with the highest strength
Queries
    ?untagged=true      return only keywords unassigned to a tag
    ?value=*            return keywords:
    ?argument=top           ...this many from the most relevant keywords
    ?argument=important     ...from this many top threads

GET /keywords/id
Returns the keyword with the given id
Queries
    ?duplicates=true    returns all identical keywords and their collective score

PATCH /keywords/id
Update details - commonly tag - of the keyword id.

GET /quizzes
Returns quizzes
Queries:
    ?count=1+               return this number of most recently added quizzes
    ?restriction=pending    with pending status (past release date / not yet marked)
    ?restriction=open       with open status (before closing date / public)
    ?restriction=waiting    with waiting status (not yet public)
    ?restriction=closed     with closed status (past closing date)
    ?restriction=revisit    marked for revisiting up to one day ahead

GET /quizzes/id
Return the quiz with the given quiz_id

POST /tags
Add a new tag