Beautiful Sequences

Chef received a lot of presents on his birthday. His favorite one was an array A1,A2,A3, ..,AN of N distinct and non-negative integers. He decided to play with it.

Let's define a beautiful sequence as a sequence of length exactly K such that after sorting its elements, the absolute difference between all K−1 pairs of adjacent elements is less than or equal to P.

Given P and K, help the Chef count the number of subsequences of array A which are beautiful sequences. Two subsequences are considered different if the sets of indices of the K chosen elements are different.

Since the answer can be large, output it modulo 109+7.

Input:
First line of the input contains a single integer T denoting the number of test cases. The description of T test cases follows.
The first line of each test case contains a three space separated integers N, K and P respectively.
The second line contains N space-separated integers A1,A2,..,AN.
Output:
For each test case, print a single line containing the number of subsequences of array A which are beautiful sequences modulo 109+7.

Constraints
1≤T≤10
2≤N≤2000
2≤K≤N
0≤Ai≤109 for each valid i
All elements in array A are distinct i.e. Ai≠Aj if i≠j.
0≤P≤109
Subtasks
30 points : 2≤N≤100
70 points : original constraints
Sample Input:
2
6 3 5
9 8 7 1 5 6
2 2 1
1 2
Sample Output:
17
1
EXPLANATION:
Example case 1: All valid subsequences after sorting are :
[1,5,6], [1,5,7], [1,5,8], [1,5,9], [1,6,7], [1,6,8], [1,6,9], [5,6,7], [5,6,8], [5,6,9], [5,7,8], [5,7,9], [5,8,9], [6,7,8], [6,7,9], [6,8,9] and [7,8,9].
Here in [1,5,6] the difference (5−1)≤P and (6−5)≤P hence subsequence [1,5,6] is valid.
Subsequence [8,7,1] which will be [1,7,8] after sorting is invalid since (7−1)>P.
Hence number of valid subsequences are 17.

Example case 2: Only possible subsequence of size 2 is [1,2] and it is a beautiful sequence. Hence answer is 1.

