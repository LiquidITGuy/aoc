# Introduction
first of all that's a personal challenge began few days after, so I will try to catch my late but I'm not sur to do it.
I do this for fun, trying some design pattern, langages and other, so, sometimes it will be good tested, sometimes perf optimized, sometimes with classes, sometimes in fp etc…
I'll try wrote here the reflexions I made during making this challenge. 
# Day 1
I firstly tried to split in many usage in fp (begin by reading the file, then create const for the elf with the array then use reduce to compute Calories of each elf then Use Math.max to get the biggest amount)
This works well, but I don't need any scalability for now (and class with getter will do better for that I think). So I refactor my code to read the file lne by line and compute on each line to optimize performances.
