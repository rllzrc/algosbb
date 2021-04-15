using System; 

// ** @mcrsft Arrays + Strings Reps Challenge ~ C# Edition ~
// ** --> { groupAnagrams !!! }

// T A SK !!!

// Given an array of strings (strs) group the anagrams together. You can return the answer in any order.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 

// * --- Roadmap --- *
// input: array of strings
// output: an array of grouped anagrams (in any order)
// constraints: optimize
// edge cases: 

public class Solution {
  public IList<IList<string>> GroupAnagrams(string[] strs) {
    if(strs == null || strs.Length == 0) {
      return new List<IList<String>>();
    }

		var map = new Dictionary<String, List<String>>();

		foreach (String s in strs) {
			char[] char = s.ToCharArray();
			Array.Sort(char);

			String keyStr = new string(char);
			if(!map.ContainsKey(keyStr)) {
				map.Add(keyStr, new List<String>());
			}
			map[keyStr].Add(s);
		}
		return new List<IList<String>>(map.Values);
  }
}