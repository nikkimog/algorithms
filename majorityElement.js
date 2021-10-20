var majorityElement = function (nums) {
	let numObj = {};
	for (let i = 0; i < nums.length; i++) {
		if (numObj[nums[i]]) {
			numObj[nums[i]]++;
		} else numObj[nums[i]] = 1;
		if (numObj[nums[i]] > nums.length / 2) {
			return nums[i];
		}
	}
};
