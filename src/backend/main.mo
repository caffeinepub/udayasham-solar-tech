import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import LeadTypes "types/leads";
import ProductTypes "types/products";
import LeadsApi "mixins/leads-api";
import ProductsApi "mixins/products-api";
import ProductsLib "lib/products";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let leads = List.empty<LeadTypes.Lead>();
  var nextLeadId : Nat = 1;

  let products = List.empty<ProductTypes.Product>();

  // Pre-seed products on init
  ProductsLib.seedProducts(products);

  include LeadsApi(accessControlState, leads, nextLeadId);
  include ProductsApi(products);
};
