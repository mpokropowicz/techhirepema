string = '{"id"=>"2", "county"=>"Alleghney", "municipality_name"=>"BenAvon", "common_id"=>"2", "name"=>"Cole Pokropowicz", 
"street_address"=>"129BreadingAve", "city"=>"Pittsburgh", 
"zip_code"=>"15202", "municipality_code"=>"19122", "date_damaged"=>"2017-04-03", 
"longitude"=>"09", "latitude"=>"08", "location_notes"=>"Location Notes", "primary_home"=>nil, "renter"=>nil, "foundation_home"=>"7", 
"floor_frame_home"=>"16", "exterior_walls_home"=>"14", "roof_home"=>"9", "interior_walls_home"=>"28", "plumbing_home"=>"10", "heating_ac_home"=>"10", 
"electrical_home"=>"6", "floor_frame_mobile"=>"0", "exterior_walls_mobile"=>"0", "roof_mobile"=>"0", "interior_walls_mobile"=>"0", 
"destroyed_home"=>"11", "major_home"=>"12", "minor_home"=>"13", "affected_home"=>"14", "inaccessible_home"=>"15", "destroyed_mobile"=>"0", 
"major_mobile"=>"0", "minor_mobile"=>"0", "affected_mobile"=>"0", "inaccessible_mobile"=>"0", "comments"=>nil, "flood_insurance"=>nil, 
"basement_water"=>"3", "first_floor_water"=>"0", "height_water"=>nil, "add_comments"=>nil, "assessor_name"=>nil, "date_assessed"=>nil}'

string = string.delete("{").delete("}")
string = string.tr("\"", "'")
print string

h = {}
string.split(',').each do |substr|
   ary = substr.strip.split('=>')
   h[ary.first.tr('"','')] = ary.last.tr('"','')
end

# print h