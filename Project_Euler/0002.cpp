//Answer: 4613732
//Problem Name: Even Fibonacci numbers
#include <iostream>
using namespace std;

int main()
{
    int limit = 4000000;
    int left = 1;
    int right = 2;
    int ans = 0;
    while(right < limit)
    {
        if(right%2 == 0)
        {
            ans += right;
        }
        right = left + right;
        left = right - left;
    }
    cout<<ans<<endl;
}