#include <iostream>
#include <vector>
using namespace std;

int main() {
	int t;
	cin>>t;
	while(t--)
	{
	    int n,m,q;
	    cin>>n>>m>>q;
	    vector<vector<int>> array(n,vector<int>(m,0));
	    for(int i=0;i<q;i++)
	    {
	        int r,c;
	        cin>>r>>c;
	        for(int i=0;i<n;i++)array[i][c-1] += 1;
	        for(int i=0;i<m;i++)array[r-1][i] += 1;
	    }
	    int ans = 0;
	    for(int i=0;i<n;i++)
	    {
	        for(int j=0;j<m;j++)
	        {
	            if(array[i][j]%2)ans++;
	        }
	    }
	    cout<<ans<<endl;
	}
	return 0;
}
