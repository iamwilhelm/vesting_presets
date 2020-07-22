Most securities has a vesting schedule. The vesting schedule for each security can be populated with a vesting schedule preset or entered manually. For this task we will build: 

- Vesting schedules for securities
- Vesting schedule templates for securities

Task one: Vesting schedules for securities
- A security has the following fields representing its vesting schedule:
- Vesting schedule template
- - Link to vesting schedule templates form
- - Optional
- Vesting start date
- Cliff toggle: shows and hides the following fields
- Cliff duration
- Cliff percentage
- Vesting duration

The vesting duration field is calculated from two previous fields: cliff duration field and cliff percentage field. If either the cliff duration or the cliff percentage changes, then the vesting duration should also change. For example, If it’s a 12 month cliff, with 25%, then the vesting duration should be updated to 48 months. 

If vesting duration is edited by the user, it will override the automatic calculation of vesting duration. 

Task two: Vesting schedule templates for securities
- Create a vesting schedule template with the following fields: 
- Vesting template name
- Vesting duration
- Cliff toggle
- Cliff Duration
- Cliff percentage

When the template form is submitted, it redirects back to the security form. The security form should have the new template selected, and the security form should have the values of the preset filled in.
