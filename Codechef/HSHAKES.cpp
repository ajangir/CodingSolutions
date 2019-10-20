#include <iostream>
#include <vector>
using namespace std;

int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int n;
	    cin>>n;
	    vector<int> array(n);
	    int sum = 0;
	    for(int i=0;i<n;i++)
	    {
	        cin>>array[i];
	        sum += array[i];
	    }
	    int ans = 0;
	    for(int i=0;i<n;i++)
	    {
	        array[i] = (sum-array[i])*array[i];
	        ans += array[i];
	    }
	    cout<<ans/2<<endl;
	}
	return 0;
}
