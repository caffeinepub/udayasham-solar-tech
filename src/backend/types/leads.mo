module {
  public type Lead = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    city : Text;
    roofSize : ?Text;
    preferredDate : ?Text;
    message : ?Text;
    status : Text;
    submittedAt : Int;
  };

  public type SubmitLeadArgs = {
    name : Text;
    phone : Text;
    email : Text;
    city : Text;
    roofSize : ?Text;
    preferredDate : ?Text;
    message : ?Text;
  };
};
