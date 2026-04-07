import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import LeadTypes "../types/leads";
import LeadsLib "../lib/leads";

mixin (
  accessControlState : AccessControl.AccessControlState,
  leads : List.List<LeadTypes.Lead>,
  nextLeadId : Nat,
) {
  var _nextLeadId : Nat = nextLeadId;

  public shared func submitLead(args : LeadTypes.SubmitLeadArgs) : async Nat {
    let id = LeadsLib.submitLead(leads, _nextLeadId, args, Time.now());
    _nextLeadId += 1;
    id;
  };

  public query ({ caller }) func getLeads() : async [LeadTypes.Lead] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    LeadsLib.getLeads(leads);
  };

  public shared ({ caller }) func updateLeadStatus(id : Nat, status : Text) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update lead status");
    };
    LeadsLib.updateLeadStatus(leads, id, status);
  };

  public shared ({ caller }) func deleteLead(id : Nat) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete leads");
    };
    LeadsLib.deleteLead(leads, id);
  };
};
