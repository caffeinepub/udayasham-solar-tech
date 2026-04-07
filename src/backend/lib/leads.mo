import List "mo:core/List";
import Types "../types/leads";

module {
  public func submitLead(
    leads : List.List<Types.Lead>,
    nextId : Nat,
    args : Types.SubmitLeadArgs,
    now : Int,
  ) : Nat {
    let lead : Types.Lead = {
      id = nextId;
      name = args.name;
      phone = args.phone;
      email = args.email;
      city = args.city;
      roofSize = args.roofSize;
      preferredDate = args.preferredDate;
      message = args.message;
      status = "new";
      submittedAt = now;
    };
    leads.add(lead);
    nextId;
  };

  public func getLeads(leads : List.List<Types.Lead>) : [Types.Lead] {
    leads.toArray();
  };

  public func updateLeadStatus(
    leads : List.List<Types.Lead>,
    id : Nat,
    status : Text,
  ) : Bool {
    var found = false;
    leads.mapInPlace(
      func(lead) {
        if (lead.id == id) {
          found := true;
          { lead with status = status };
        } else {
          lead;
        };
      }
    );
    found;
  };

  public func deleteLead(leads : List.List<Types.Lead>, id : Nat) : Bool {
    let sizeBefore = leads.size();
    let filtered = leads.filter(func(lead) { lead.id != id });
    leads.clear();
    leads.append(filtered);
    leads.size() < sizeBefore;
  };
};
