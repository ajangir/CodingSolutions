#include <bits/stdc++.h>

using namespace std;

string ltrim(const string &);
string rtrim(const string &);


/*
 * Complete the 'getHeaviestPackage' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY packageWeights as parameter.
 */

long getHeaviestPackage(vector<int> arr) 
{
    int n = arr.size();
    vector<long long> b = vector<long long>(n);
    for(int i=0;i<n;i++)b[n-1-i] = arr[i];
    long long ans = b[0];
    for(int i=1;i<n;i++)
    {
        if(b[i] < b[i-1])b[i] += b[i-1];
        ans = max(ans,b[i]);
    }
    return ans;
}
int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string packageWeights_count_temp;
    getline(cin, packageWeights_count_temp);

    int packageWeights_count = stoi(ltrim(rtrim(packageWeights_count_temp)));

    vector<int> packageWeights(packageWeights_count);

    for (int i = 0; i < packageWeights_count; i++) {
        string packageWeights_item_temp;
        getline(cin, packageWeights_item_temp);

        int packageWeights_item = stoi(ltrim(rtrim(packageWeights_item_temp)));

        packageWeights[i] = packageWeights_item;
    }

    long result = getHeaviestPackage(packageWeights);

    fout << result << "\n";

    fout.close();

    return 0;
}

string ltrim(const string &str) {
    string s(str);

    s.erase(
        s.begin(),
        find_if(s.begin(), s.end(), not1(ptr_fun<int, int>(isspace)))
    );

    return s;
}

string rtrim(const string &str) {
    string s(str);

    s.erase(
        find_if(s.rbegin(), s.rend(), not1(ptr_fun<int, int>(isspace))).base(),
        s.end()
    );

    return s;
}
