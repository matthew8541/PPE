def fetchManufacture(cursor):
    manufacturerQuery = f"""
        SELECT *
        FROM InventoryHasProduct i INNER JOIN Product p ON i.product_id=p.id
        WHERE i.inventory_business in (
            SELECT name
            FROM Manufacturer
        )
    """
    try: 
        cursor.execute(manufacturerQuery)
        return cursor.fetchall()
    except:
        return f"There is something wrong with business data fetching in dashboard"


def fetchInventory(cursor, hospital):
    inventoryQuery = f"""
        SELECT i.inventory_business, i.product_id, i.count, p.name_color, p.name_type
        FROM InventoryHasProduct i INNER JOIN Product p ON i.product_id=p.id
        WHERE i.inventory_business='{hospital}'
    """

    try: 
        cursor.execute(inventoryQuery)
        return cursor.fetchall()
    except:
        return f"There is something wrong with business data fetching in dashboard"

def fetchRecentTransaction(cursor, hospital, limit=3):
    recentTransactionQuery = f"""
        SELECT CONCAT(p.name_color, ' ', p.name_type), ti.manufacturer, ti.count, DATE_FORMAT(t.date, '%Y-%m-%d')
        FROM TransactionItem ti 
            INNER JOIN Product p ON ti.product_id=p.id
            INNER JOIN Transaction t ON t.id=ti.transaction_id
        WHERE t.hospital='{hospital}'
        ORDER BY DATE(t.date) DESC
        LIMIT {limit};
    """

    try:
        cursor.execute(recentTransactionQuery)
        return cursor.fetchall()
    except:
        return f"There is something wrong with recent transaction data fetching in dashboard"
    
def fetchTableDetail(cursor, table):
    query = f"""
        SELECT * 
        FROM {table}
    """
    try:
        cursor.execute(query)
        return cursor.fetchall()
    except:
        return f"There is something wrong with data fetching in {table} table"