# Introduction
first of all that's a personal challenge began few days after, so I will try to catch my late but I'm not sur to do it.
I do this for fun, trying some design pattern, langages and other, so, sometimes it will be good tested, sometimes perf optimized, sometimes with classes, sometimes in fp etc…
I'll try wrote here the reflexions I made during making this challenge. 
## Day 1
I firstly tried to split in many usage in fp (begin by reading the file, then create const for the elf with the array then use reduce to compute Calories of each elf then Use Math.max to get the biggest amount)
This works well, but I don't need any scalability for now (and class with getter will do better for that I think). So I refactor my code to read the file lne by line and compute on each line to optimize performances.

## Day 2
### Part 1
This time I do it with class.
It could be way better by putting the scorer as a full class which is injected into the boardgame to respect the SOLID principle.
But for now the goal is to see if the second part is easy to do with thoses classes.
### Part 2
I choose to keep the principle of a board game with two players input, so I will not change the board but only the input of the player. I will compute the second player input by the readed input and do not change the rules

## Break
I had to make a break since few days. So now I will keep the challenge and extend it until january the 13 one solve by day

## Day 3
No reflexion for this part I just made a refactoring to use reduce and optimize my code

## Day 4
### Part 1
For this challenge I choose to split the initialization and the run. Regarding the last days I'm disappointed with the code duplication.
This time I choose a more reusable code instead of a more performance one.
I will do fot his time a mix of class and fp (not so cool to read) but it will be usefull to choose my next days style.

It seems that's I didn't fully understand the rules in my first guess (current commit if you want to check), my guess is 507.

>That's not the right answer; your answer is too high. Curiously, it's the right answer for someone else; you might be logged in to the wrong account or just unlucky. In any case, you need to be using your puzzle input. If you're stuck, make sure you're using the full input data; there are also some general tips on the about page, or you can ask for hints on the subreddit. Please wait one minute before trying again. (You guessed 507.)

Result (483) by excluding similar section is incorrect too. 

I tried to change my approach to prevent fake overlapping with strings (with my first approach I use string to compare 1234 with 12345, it may cause some fakes overlap (cf unit tests))

### Part 2
For the second part of this challenge it has been really easier. I just had to add with tdd a new method and use it.
As I was thinking split the initialization of the run and using some class will do a better job for second parts.
I even think about making some change into my main script of run to improve it, but it will be after the end of the challenge.
