Chef And Choice of Ingredients

A shopkeeper in Chefland has N ingredients in a row his store. He is a cunning and greedy fellow and thus every time Chef comes to buy something, the shopkeeper offers him only a sub-segment (sub-array) of the N ingredients he has and says that the others are out of stock. Then the shopkeeper imposes two extra conditions:

If Chef buys an ingredient of price X, then he also has to buy all ingredients of price lesser than X from the sub-segment chef has been asked to choose from.
Chef has to buy total ingredients worth at least Y from the sub-segment in offer, or he cannot buy anything at all.
Formally Chef has a list of N items where ith item has cost Ai. Chef goes to the shop Q times and each time is presented with three integers Y , L and R where L and R stand for the sub-segment of ingredients on offer and Y stands for the minimum amount of money he must spend. For each query help Chef find the minimum total cost of ingredients he can buy or state that he cannot buy anything at all.

Note that all ingredients with index between L and R (both inclusive) are on offer in a given query. It does not matter if Chef has bought some of them before, the shopkeeper replenishes them.

Also note that chef does NOT want to minimize or maximize the number of products he buys.

Input:
The first line contains an integer N.

The next line has N space separated integers A1,A2,.....,AN where Ai describes cost of ith ingredient.

The next line will contain an integer Q which is the number of queries.

Q lines will follow, each line will have 3 space separated integers:

L R Y
L and R denote the subsegment on offer and Y tells the minimum amount to be spent in that turn.

Output:
Output Q lines, each line corresponding to a query. Output a single integer val which is the
minimum amount chef has to spend to be able to shop. If there is no such amount print −1.
Constraints:
1≤N≤106
1≤Q≤2000
1≤Ai≤109
1≤L≤R≤N
1≤Y≤1018
All Ais are distinct i.e if i≠j then Ai≠Aj
Subtasks:
Subtask #1 (30 Points): 1≤N≤1000
Subtask #2 (70 Points): Original constraints
Sample Input:
6
3 1 8 2 4 7
3
1 4 4
2 5 7
2 6 35
Sample Output:
6
7
-1
Explanation:
In the first query, the minimum price to be covered is 4 and the segment on offer has costs [3,1,8,2]. Chef will choose items which cost 3,1 and 2 with a total cost 6 as it is his best option.

In the second query, Chef will choose items which cost 1,2 and 4 with cost total as 7 as that is the best he can do.

In the third query, there is no way chef can choose any combination of products and ensure the minimum price of 35 to be covered. Hence he cannot buy anything.

