
frappe.query_reports["DPI Task Report"] = {
    "filters": [
        {
            "fieldname":"from_date",
            "label": __("From Date"),
            "fieldtype": "Date",
            "default": frappe.datetime.add_days(frappe.datetime.get_today(), -7),
            "reqd": 1,
        },
        {
            "fieldname":"to_date",
            "label": __("To Date"),
            "fieldtype": "Date",
            "default": frappe.datetime.get_today(),
            "reqd": 1,
        },
		{
			"fieldname":"assigned_to",
			"label": __("Assigned To"),
			"fieldtype": "Link",
			"options": "User",
		},
		{
			"fieldname":"owner",
			"label": __("Created By"),
			"fieldtype": "Link",
			"options": "User",
		},
    ]
}