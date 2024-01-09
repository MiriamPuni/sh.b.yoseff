import styles from './style.module.css'

function Admin() {
  return (
    <div className={styles.adminContainer}>
      <h1 className={styles.adminHeading}>Admin Dashboard</h1>
      <div className={styles.adminContent}>
        <p>Welcome, Admin! You have access to the admin dashboard where you can manage and update the lion store.</p>
        <div className={styles.adminFeatures}>
          <div className={styles.adminFeature}>
            <p className={styles.adminFeatureTitle}>Manage Lion Inventory</p>
            <p className={styles.adminFeatureDescription}>Add, edit, or remove lions from the inventory.</p>
          </div>
          <div className={styles.adminFeature}>
            <p className={styles.adminFeatureTitle}>Update Lion Details</p>
            <p className={styles.adminFeatureDescription}>Edit lion information such as name, description, and price.</p>
          </div>
          <div className={styles.adminFeature}>
            <p className={styles.adminFeatureTitle}>View Sales Reports</p>
            <p className={styles.adminFeatureDescription}>Access sales reports and analytics for the lion store.</p>
          </div>
        </div>
        <p>Feel free to use the admin tools to keep the lion store up-to-date and monitor its performance.</p>
      </div>
    </div>
  )
}

export default Admin